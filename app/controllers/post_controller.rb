class PostController < ApplicationController
  
  def postshow
    render :layout => false
  end
  
  def viewpost
    render :layout => false
  end 
  

  def newpost

    result = Hash.new()

    begin
      Post.create(:userid=> params[:userid], :title=> params[:title], :postext=> params[:postexto] )
      result = {:success => true, :message=> "ok"}
    rescue
      result = {:success => false, :message=> "error"}
    end

    render json: result

  end

  def postlist

    result = Hash.new()

    begin
      datafind = User.find_by_sql("SELECT posts.id, users.username, posts.title, posts.postext, to_char(posts.created_at, 'dd/mm/yyyy')
                                  FROM  posts, users
                                  WHERE posts.userid = users.id
                                  order by posts.id desc" )
                                   
      result = {:success => true, :data=> datafind}
    rescue
      result = {:success => false, :data=> nil }
    end

    render json: result

  end

end
