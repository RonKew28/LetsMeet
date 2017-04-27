class ChangeEventTableColumns < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :date, :date
    rename_column :events, :location, :location_name
    add_column :events, :time, :time
    add_column :events, :location_address, :string
  end
end
