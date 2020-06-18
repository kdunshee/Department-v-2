class Api::ItemsController < ApplicationController
  
    before_action :set_department

    def index 
    render json: @departments.items 
    end

    def update 
      item = Item.find(params[:id])
      if item.update(item_params)
        render json: item
      else
        render json: { errors: item.errors, status: 422 }
      end
    end

    def create
      department = Department.find(params[:department_id])
      render json: department.items.create(item_params)
    end

    def destroy
      item = Item.find(params[:id])
      render json: item.destroy
    end
  
    private

    def set_department
      @departments = Department.find(params[:department_id])
    end
  
    def item_params
      params.require(:item).permit(:name, :description)
    end
  end

