class AddPublishedToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :published, :bool, null: false, default: false
    Post.update_all(published: true)
  end
end
