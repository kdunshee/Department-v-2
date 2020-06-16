50.times do
    Department.create(
      name: Faker::Appliance.brand,
      description: Faker::Lorem.sentence,
    )
  end
  
  puts "50 Products Seeded"
  