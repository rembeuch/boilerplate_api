class Player < ApplicationRecord
    validates :wallet_address, uniqueness: true, presence: true
end
