class Api::ItemsController < ApplicationController
  class Api::ReviewsController < ApplicationController
    def create
      department = Department.find(params[:department_id])
      render json: department.items.create(item_params)
    end
  
    private
  
    def item_params
      params.require(:item).permit(:name, :description)
    end
  end

