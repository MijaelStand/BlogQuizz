class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :id
      t.integer :userid
      t.string :title
      t.text :postext

      t.timestamps
    end
  end
end
