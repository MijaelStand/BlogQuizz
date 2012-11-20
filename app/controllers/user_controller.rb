class UserController < ApplicationController
  def show
    render :layout => false
  end
  
  def user_new 
    result = Hash.new()

    begin
      User.create(:username=> params[:usernombre], :passtexto=> params[:userclave], :email=> params[:correo] )
      result = {:success => true, :message=> "ok"}
    rescue
      result = {:success => false, :message=> "error"}
    end

    render json: result
  end
  
  
end
