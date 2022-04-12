class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.references :room, null: false, foreign_key: true

      t.timestamps

      add_index :users, :email,                unique: true
      add_index :users, :reset_password_token, unique: true
    end
  end
end
