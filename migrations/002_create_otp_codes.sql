-- Migration étape 3 : codes OTP (remplace le Map en mémoire)
-- À exécuter sur la base de données amygo1 (MariaDB 10.4)

CREATE TABLE IF NOT EXISTS `otp_codes` (
  `id`        BIGINT       NOT NULL AUTO_INCREMENT,
  `phone`     VARCHAR(32)  NOT NULL,
  `codeHash`  CHAR(64)     NOT NULL,
  `expiresAt` DATETIME     NOT NULL,
  `attempts`  TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `usedAt`    DATETIME     NULL DEFAULT NULL,
  `createdAt` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_phone_id` (`phone`, `id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
