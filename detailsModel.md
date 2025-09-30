# Analyse du modèle de données

Ce document détaille les entités de la base de données et les relations qui existent entre elles.

## Entités principales

### `register_user`

Cette table contient les informations sur les utilisateurs de l'application.

**Colonnes :**

- `iUserId` (Primaire)
- `iCompanyId`
- `vName`
- `vLastName`
- `vEmail`
- `vPassword`
- `vPhone`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `trips` : Un utilisateur peut avoir plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `user_wallet` : Un utilisateur peut avoir plusieurs transactions dans son portefeuille. (Explicite via `@OneToMany`)

### `register_driver`

Cette table contient les informations sur les conducteurs.

**Colonnes :**

- `iDriverId` (Primaire)
- `iCompanyId`
- `vName`
- `vLastName`
- `vEmail`
- `vPassword`
- `vPhone`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `company` : Un conducteur appartient à une entreprise. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `trips` : Un conducteur peut avoir plusieurs voyages. (Explicite via `@OneToMany`)

### `trips`

Cette table contient les informations sur les voyages.

**Colonnes :**

- `iTripId` (Primaire)
- `iUserId`
- `iDriverId`
- `iCompanyId`
- `tStartLat`
- `tStartLong`
- `tEndLat`
- `tEndLong`
- `tSaddress`
- `tDaddress`
- `iFare`
- `iActive`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `register_user` : Un voyage est associé à un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `register_driver` : Un voyage est associé à un conducteur. (Explicite via `@ManyToOne`)

### `user_wallet`

Cette table contient les informations sur le portefeuille des utilisateurs.

**Colonnes :**

- `iUserWalletId` (Primaire)
- `iUserId`
- `eUserType`
- `iBalance`
- `eType`
- `eFor`
- `tDescription`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `register_user` : Une transaction de portefeuille est associée à un utilisateur. (Explicite via `@ManyToOne`)

### `company`

Cette table contient les informations sur les entreprises.

**Colonnes :**

- `iCompanyId` (Primaire)
- `vCompany`
- `vEmail`
- `vPassword`
- `vPhone`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `register_driver` : Une entreprise peut avoir plusieurs conducteurs. (Explicite via `@OneToMany`)
- **Relation implicite** avec `service` via `iServiceId`.

### `orders`

Cette table contient les informations sur les commandes.

**Colonnes :**

- `iOrderId` (Primaire)
- `iServiceId`
- `iUserId`
- `iDriverId`
- `iCompanyId`
- `fNetTotal`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `service_categories` : Une commande est associée à une catégorie de service. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `order_status` : Une commande est associée à un statut de commande. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `register_user` : Une commande est associée à un utilisateur. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `register_driver` : Une commande est associée à un conducteur. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `company` : Une commande est associée à une entreprise. (Explicite via `@ManyToOne`)

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

- **Un à plusieurs** avec `register_driver` : Un véhicule est associé à un conducteur. (Explicite via `@ManyToOne`)
- **Relation implicite** avec `vehicle_type` via `vCarType`.
- **Relation implicite** avec `rental_package` via `vRentalCarType`.
- **Un à plusieurs** avec `company` : Un véhicule est associé à une entreprise. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `make` : Un véhicule est associé à une marque. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `model` : Un véhicule est associé à un modèle. (Explicite via `@ManyToOne`)

## Autres entités

Il existe un grand nombre d'autres entités dans le projet. La plupart d'entre elles semblent suivre le même modèle de relations implicites, où les clés étrangères sont définies comme des colonnes standard avec des commentaires indiquant la table liée.

Pour une analyse exhaustive, il serait nécessaire d'examiner chaque fichier d'entité et de documenter ses colonnes et ses relations implicites. Cependant, l'analyse ci-dessus des entités principales donne un bon aperçu de l'architecture de la base de données.
