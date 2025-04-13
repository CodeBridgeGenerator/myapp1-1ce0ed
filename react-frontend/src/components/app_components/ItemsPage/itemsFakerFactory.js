
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
itemid: faker.lorem.sentence(1),
details: faker.lorem.sentence(1),
qty: faker.lorem.sentence(1),
price: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
