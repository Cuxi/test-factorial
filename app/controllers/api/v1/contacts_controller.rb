module Api
  module V1
    class ContactsController < ApplicationController
      before_action :session_user

      def index
        contacts = Contact.all
        if contacts
          render json: {
            contacts: contacts
          },
          status: :ok
        else
          render status: :reset_content
        end
      end

      def show
        contact = Contact.find_by(email: params[:email])
        if contact
          render json: {
            contact: contact
          },
          status: :ok
        else
          render status: :reset_content
        end
      end

      def create
        contact = Contact.new(contact_params)
        if contact
          if contact.save
            render json: {
              contact: contact
            },
            status: :created
          else
            render json: {
              error: contact.errors.messages
            },
            status: :unprocessable_entity
          end
        else
          render status: :reset_content
        end
      end

      def update
        contact = Contact.find_by(email: params[:email])
        if contact
          if contact.update(contact_params)
            render json: {
              contact: contact
            },
            status: :ok
          else
            render json: {
              error: contact.errors.messages
            },
            status: :unprocessable_entity
          end
        else
          render status: :reset_content
        end
      end

      def destroy
        contact = Contact.find_by(email: params[:email])
        if contact
          if contact.destroy
            head :no_content, status: :ok
          else
            render json: {
              errors: contact.errors.messages
            },
            status: :unprocessable_entity
          end
        else
          render status: :reset_content
        end
      end

      private

      def contact_params
        params.require(:contact).permit(:first_name, :last_name, :phone, :email)
      end

    end
  end
end
