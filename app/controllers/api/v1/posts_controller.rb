class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.order(created_at: :desc).limit(9)
    render json: posts
  end

  def create
    post = Post.create!(post_params)
    if post
      render json: post
    else
      render json: post.errors
    end
  end

  def show
    if post
      render json: post
    else
      render json: post.errors
    end
  end

  def destroy
    post&.destroy
    render json: { message: 'Post deleted!' }
  end

  private

  def recipe_params
    params.permit(:name, :title, :excerpt, :content, :image)
  end

  def post
    @post ||= Post.find(params[:id])
  end
end
