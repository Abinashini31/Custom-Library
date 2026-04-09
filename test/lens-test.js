import { lens, view, set } from './index.js';

const user = {
    id: 1,
    profile: {
        settings: {
            theme: 'light'
        }
    }
};

const themeLens = lens('profile.settings.theme');

// View
console.log(view(themeLens, user)); 
// light

// Update
const updatedUser = set(themeLens, 'dark', user);

console.log(user.profile.settings.theme); 
// light (unchanged)

console.log(updatedUser.profile.settings.theme); 
// dark (new object)