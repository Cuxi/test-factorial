module Api
    module V1
        class UsersController < ApplicationController

          # skip_before_action :require_login, only: [:create]
          def create
            user = User.create(user_params)
            if user.valid?
              payload = {user_id: user.id}
              token = JWT.encode(payload, 'my_secret')
              puts token
              render json: {user: user, jwt: token}, status: :created
            else
              render json: {errors: user.errors.full_messages}, status: :not_acceptable
            end
          end

          private

          def user_params
            params.require(:user).permit(:username, :email, :password, :password_confirmation)
          end

        end
    end
end
