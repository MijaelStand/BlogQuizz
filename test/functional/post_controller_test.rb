require 'test_helper'

class PostControllerTest < ActionController::TestCase
  test "should get postshow" do
    get :postshow
    assert_response :success
  end

end
