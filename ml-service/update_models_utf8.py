import re

with open('model_hub.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Fraud model replacement
old_fraud_start = text.find('def _train_fraud_model(self) -> None:')
old_fraud_end = text.find('def _train_work_proof_model(self) -> None:')

if old_fraud_start == -1 or old_fraud_end == -1:
    print('Failed to find fraud model function')
    exit(1)

new_fraud = '''def _train_fraud_model(self) -> None:
        from sklearn.ensemble import IsolationForest
        from sklearn.pipeline import Pipeline
        from sklearn.preprocessing import StandardScaler
        import numpy as np

        rng = np.random.default_rng(11)

        # ── Genuine human sessions ──────────────────────────────────────────
        n_human = 5000
        avg_gap_human    = rng.normal(60_000, 8_000, n_human)
        jitter_human     = np.abs(rng.normal(1_200, 500, n_human)) + 300
        hb_count_human   = rng.integers(3, 80, n_human)
        login_hour_human = np.concatenate([
            rng.integers(11, 15, n_human // 3),
            rng.integers(18, 23, n_human // 3),
            rng.integers(8, 11, n_human - 2 * (n_human // 3)),
        ])
        X_human = np.column_stack([avg_gap_human, jitter_human, hb_count_human, login_hour_human])

        # ── Bot / scripted sessions ──────────────────────────────────────────
        n_bot = 800
        avg_gap_bot  = rng.normal(60_000, 150, n_bot)
        jitter_bot   = np.abs(rng.normal(20, 15, n_bot))
        hb_count_bot = rng.integers(50, 250, n_bot)
        login_hour_bot = np.concatenate([
            rng.integers(0, 5, n_bot // 2),
            rng.integers(15, 17, n_bot - (n_bot // 2)),
        ])
        X_bot = np.column_stack([avg_gap_bot, jitter_bot, hb_count_bot, login_hour_bot])

        X = np.vstack([X_human, X_bot])

        contamination = len(X_bot) / len(X)
        pipeline = Pipeline([
            ('scaler', StandardScaler()),
            ('iso', IsolationForest(
                n_estimators=150,
                contamination=contamination,
                random_state=42,
                n_jobs=-1
            ))
        ])

        pipeline.fit(X)

        joblib.dump(pipeline, FRAUD_MODEL_PATH)
        self.fraud_model = pipeline

    '''

text = text[:old_fraud_start] + new_fraud + text[old_fraud_end:]

with open('model_hub.py', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated fraud model.")
