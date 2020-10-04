class User < ApplicationRecord
  has_secure_password


  validates :username, presence: true, uniqueness: true, length: { minimum: 4 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP },
                      presence: true,
                      uniqueness: true

end
