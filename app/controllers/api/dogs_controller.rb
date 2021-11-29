class Api::DogsController < ApplicationController
  before_action :set_dog, only: [:show, :update, :destroy]

  # get to "/api/dogs"
  def index
    render json: Dog.all
  end

  # get to "/api/dogs/:id"
  def show
    render json: @dog
  end

  # post to "/api/dogs"
  def create
    @dog = Dog.new(dog_params)
    if(@dog.save)
      render json: @dog
    else
      render json: {errors: @dog.errors}, status: :unprocessable_entity
    end
  end

  # put/patch to "/api/dogs/:id"
  def update
    if(@dog.update(dog_params))
      render json: @dog
    else
      render json: {errors: @dog.errors}, status: :unprocessable_entity
    end
  end

  # delete to "/api/dogs/:id"
  def destroy
    render json: @dog.destroy
  end

  private

  def set_dog
    @dog = Dog.find(params[:id])
  end

  def dog_params
    params.require(:dog).permit(:name, :breed, :age, :gender)
  end

end
