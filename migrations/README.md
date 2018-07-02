# Install sequelize-cli globally:
- npm i -g sequelize-cli

# Generates a new migration file
- sequelize migration:create --name add-file

# Run pending migrations
- sequelize db:migrate

# Undo migration
- sequelize db:migrate:undo
# Undo all migrations
- sequelize db:migrate:undo:all
# Undo to specific migrations
- sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

# List the status of all migrations
- sequelize db:migrate:status


# Generates a new seed file
- sequelize seed:generate

# Run specified seeder
- sequelize db:seed

# Run every seeder
- sequelize db:seed:all

# Deletes data from the database
- sequelize db:seed:undo

# Deletes data from the database
- sequelize db:seed:undo:all