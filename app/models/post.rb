class Post < ApplicationRecord
  validates :slug, presence: true
end
