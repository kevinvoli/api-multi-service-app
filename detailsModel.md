# Analyse du modèle de données

Ce document détaille les entités de la base de données et les relations qui existent entre elles.

## Entités principales

### `register_user`

Cette table contient les informations sur les utilisateurs de l'application.

**Colonnes :**

- `iUserId` (Primaire)
- `iCompanyId`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `company`: Un utilisateur est associé à une entreprise. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `trips` : Un utilisateur peut avoir plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `user_wallet` : Un utilisateur peut avoir plusieurs transactions dans son portefeuille. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `orders` : Un utilisateur peut avoir plusieurs commandes. (Explicite via `@OneToMany`)

### `register_driver`

Cette table contient les informations sur les conducteurs.

**Colonnes :**

- `iDriverId` (Primaire)
- `iCompanyId`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `company` : Un conducteur appartient à une entreprise. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `trips` : Un conducteur peut avoir plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `orders` : Un conducteur peut avoir plusieurs commandes. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `driver_vehicle` : Un conducteur peut avoir plusieurs véhicules. (Explicite via `@OneToMany`)

### `trips`

Cette table contient les informations sur les voyages.

**Colonnes :**

- `iTripId` (Primaire)
- `iUserId`
- `iDriverId`
- `iCompanyId`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `register_user` : Un voyage est associé à un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `register_driver` : Un voyage est associé à un conducteur. (Explicite via `@ManyToOne`)

### `user_wallet`

Cette table contient les informations sur le portefeuille des utilisateurs.

**Colonnes :**

- `iUserWalletId` (Primaire)
- `iUserId`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `register_user` : Une transaction de portefeuille est associée à un utilisateur. (Explicite via `@ManyToOne`)

### `company`

Cette table contient les informations sur les entreprises.

**Colonnes :**

- `iCompanyId` (Primaire)
- `vCompany`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `register_user`: Une entreprise peut avoir plusieurs utilisateurs. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `register_driver` : Une entreprise peut avoir plusieurs conducteurs. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `orders` : Une entreprise peut avoir plusieurs commandes. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `driver_vehicle` : Une entreprise peut avoir plusieurs véhicules de conducteurs. (Explicite via `@OneToMany`)
- **Relation implicite** avec `service` via `iServiceId`.

### `orders`

Cette table contient les informations sur les commandes.

**Colonnes :**

- `iOrderId` (Primaire)
- `iServiceId`
- `iUserId`
- `iDriverId`
- `iCompanyId`
- `iStatusCode`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `service_categories` : Une commande est associée à une catégorie de service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `order_status` : Une commande a un statut. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `register_user` : Une commande est passée par un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `register_driver` : Une commande est assignée à un conducteur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `company` : Une commande est associée à une entreprise. (Explicite via `@ManyToOne`)

### `driver_vehicle`

Cette table contient les informations sur les véhicules des conducteurs.

**Colonnes :**

- `iDriverVehicleId` (Primaire)
- `iDriverId`
- `iCompanyId`
- `iMakeId`
- `iModelId`
- `vLicencePlate`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `register_driver` : Un véhicule appartient à un conducteur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `company` : Un véhicule est associé à une entreprise. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `make` : Un véhicule a une marque. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `model` : Un véhicule a un modèle. (Explicite via `@ManyToOne`)
- **Relation implicite (many-to-many non standard)** avec `vehicle_type` via `vCarType`.
- **Relation implicite (many-to-many non standard)** avec `rental_package` via `vRentalCarType`.

## Autres entités

Il existe un grand nombre d'autres entités dans le projet. La plupart d'entre elles semblent suivre le même modèle de relations implicites, où les clés étrangères sont définies comme des colonnes standard avec des commentaires indiquant la table liée.

Pour une analyse exhaustive, il serait nécessaire d'examiner chaque fichier d'entité et de documenter ses colonnes et ses relations implicites. Cependant, l'analyse ci-dessus des entités principales donne un bon aperçu de l'architecture de la base de données.