class ApplicationController < ActionController::Base

  helper_method :session_user, :current_user?
  skip_before_action :verify_authenticity_token
  # before_action :require_login


  # def authorize_request
  #   # header = request.headers['Authorization']
  #   # header = header.split(' ').[1] if header
  #   # begin
  #   #   decoded = JWT.decode(header)
  #   #   current_user = User.find(decoded[:user_id])
  #   decoded_hash = decoded_token
  #   if decoded_hash
  #       puts decoded_hash.class
  #       user_id = decoded_hash[0]['user_id']
  #       @user = User.find_by(id: user_id)
  #   else
  #       nil
  #   end
    # if current_user
    #
    # rescue ActiveRecord::RecordNotFound => e
    #   render json: { errors: e.message }, status: :unauthorized
    # rescue JWT::DecodeError => e
    #   render json: { errors: e.message }, status: :unauthorized
    # end
  # end


  def encode_token(payload)
    JWT.encode(payload, 'my_secret')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'my_secret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
          []
      end
    end
  end
  #
  def session_user
    decoded_hash = decoded_token
    if decoded_hash
        puts decoded_hash.class
        user_id = decoded_hash[0]['user_id']
        @user = User.find_by(id: user_id)
    else
        nil
    end
  end
  #
  # def logged_in?
  #   !!session_user
  # end
  #
  # def require_login
  #   render json: {error: 'Please Login'}, status: :unauthorized unless logged_in?
  # end

end
