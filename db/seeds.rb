
# Department.destroy_all
# 50.times do
#   p = Department.create(
#     name: Faker::Appliance.brand,
#     description: Faker::Lorem.sentence,
    
#   3.times do |i|
#     p.items.create(name: "item-#{i}", description: items.sample)
#   end
# end
# puts "#{Department.all.size} Products Seeded"
# puts "#{Item.all.size} Reviews Seeded"

Department.destroy_all
Item.destroy_all

6.times do |i|
  d = Department.create(name: Faker::Commerce.product_name, description: Faker::Lorem.sentence)
  3.times do |j|
    d.items.create(name: Faker::Cannabis.cannabinoid, description: Faker::Cannabis.health_benefit)
  end
end

puts "Department seeded size is #{Department.all.size}"
puts "Item seeded size is #{Item.all.size}"

