class Api::V1::PostsController < ApplicationController
  before_action :check_logged_in!, except: [:index, :show]

  def index
    posts = Post
      .select(:id, :slug, :title, :created_at, :image, :excerpt)
      .where(published: true)
      .order(created_at: :desc)
    render json: posts
  end

  def drafts
    posts = Post
      .select(:id, :slug, :title, :created_at, :image, :excerpt)
      .where(published: false)
      .order(id: :desc)
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

  def update
    p = post&.update(post_params)
    if p
      render json: p
    else
      render json: p.errors
    end
  end

  def destroy
    post&.destroy
    render json: { message: 'Post deleted!' }
  end

  private

  def post_params
    params.permit(:slug, :title, :excerpt, :content, :image, :created_at, :published)
  end

  def post
    @post ||= params[:id] ? Post.find(params[:id]) : Post.find_by(slug: params[:slug])
  end
end
