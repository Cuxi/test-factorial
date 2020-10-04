module Api
  module V1
    class AuthController < ApplicationController
      before_action :session_user, only: [:login]

      def login
        user = User.find_by(email: session_params[:email])
        if user && user.authenticate(session_params[:password])
          payload = {user_id: user.id}
          token = JWT.encode(payload, 'my_secret')
          render json: {user: user, jwt: token, success: "Welcome back, #{user.username}"}, status: :ok
        else
          render json: { errors: "Invalid user", messages: "Invalid user"}, status: :unauthorized
        end
      end

      def logout
        token = request.headers['Authorization']
        if token
          time = Time.now
          render json:{ jwt: token, exp: time.strftime("%m-%d-%Y %H:%M") }, status: :ok
        else
          render json: {
            errors: "Couldn't delete session", messages: "Couldn't delete session"
          },
          status: :unprocessable_entity
        end
      end

      def session_params
        params.require(:user).permit(:username, :email, :password)
      end

    end
  end
end
