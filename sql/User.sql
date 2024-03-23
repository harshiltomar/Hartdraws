CREATE TABLE Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  stripe_customer_id VARCHAR(100),
  stripe_subscription_id VARCHAR(100),
  stripe_price_id VARCHAR(100),
  stripe_current_period_end TIMESTAMP,
  UNIQUE KEY (email),
  UNIQUE KEY (stripe_customer_id),
  UNIQUE KEY (stripe_subscription_id),
  UNIQUE KEY (stripe_price_id)
);
