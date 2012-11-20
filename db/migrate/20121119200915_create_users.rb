class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :id
      t.string :username
      t.string :passtexto
      t.string :email

      t.timestamps
    end
  end
end
