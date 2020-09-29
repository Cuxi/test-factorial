module Api
  module V1
    class ContactsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        contacts = Contact.all
        if contacts
          render json: ContactSerializer.new(contacts).serialized_json, status:200
        else
          render status: 205
        end
      end

      def show
        contact = Contact.find_by(email: params[:email])
        if contact
          render json: ContactSerializer.new(contact).serialized_json, status:200
        else
          render status: 205
        end
      end

      def create
        contact = Contact.new(contact_params)
        if contact
          if contact.save
            render json: ContactSerializer.new(contact).serialized_json, status:200
          else
            render json: { error: contact.errors.messages }, status: 422
          end
        else
          render status: 205
        end
      end

      def update
        contact = Contact.find_by(email: params[:email])
        if contact
          if contact.update(contact_params)
            render json: ContactSerializer.new(contact).serialized_json, status:200
          else
            render json: { error: contact.errors.messages }, status: 422
          end
        else
          render status: 205
        end
      end

      def destroy
        contact = Contact.find_by(email: params[:email])
        if contact
          if contact.destroy
            head :no_content
          else

            render json: { errors: contact.errors.messages }, status: 422
          end
        else
          render status: 205
        end
      end

      private
      def contact_params
        params.require(:contact).permit(:first_name, :last_name, :phone, :email)
      end

    end
  end
end
