class CommentController < ApplicationController
  
  def commentbypost
    
    Comment.where(:id => params[:id])
    
    end
  
end
