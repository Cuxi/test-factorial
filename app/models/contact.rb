class Contact < ApplicationRecord

  validates :first_name, presence: true
  validates :last_name, presence:true
  validates :phone, presence:true
  validates_uniqueness_of :email, presence:true, format: { with: URI::MailTo::EMAIL_REGEXP }

end
