class FixColumnName < ActiveRecord::Migration[6.1]
  def self.up
    rename_column :posts, :name, :slug
  end
  def self.down
    rename_column :posts, :slug, :name
  end
end
