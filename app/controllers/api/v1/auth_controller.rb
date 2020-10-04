module Api
  module V1
    class AuthController < ApplicationController

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
        if session_user
          token = request.headers['Authorization']
          time = Time.now
          render json:{ jwt: token, exp: time.strftime("%m-%d-%Y %H:%M") }, status: :ok
          # head :no_content, status: :ok
        else
          render json: {
            errors: session_user.errors.messages
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
