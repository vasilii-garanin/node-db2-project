const cars = [
    {
        vin: '12345678901234567',
        make: 'Lexus',
        model: 'RX450h',
        mileage: '12300',
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '12345678901234568',
        make: 'Lexus',
        model: 'is350',
        mileage: '1200',
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '12345678901234569',
        make: 'Nissan',
        model: 'Altima',
        mileage: '158000',
        title: 'salvage'
    },
    {
        vin: '12345678901234571',
        make: 'VW',
        model: 'Jetta',
        mileage: '223000',
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '12345678901234572',
        make: 'Ford',
        model: 'Focus',
        mileage: '333000'
    }
];

// exports.seed = function (knex)
// {
//     return knex('cars')
//         .truncate().then(() =>
//         {
//             return knex('cars').insert(cars);
//         });
// };

//same as line 51 to 55
exports.seed = async function (knex)
{
    await knex('cars').truncate();
    await knex('cars').insert(cars);
};
