# Vacation Days

This is a npm package that provides various vacation day related functions, mainly determining if a certain date is a vacation day in a specific country

# Example

```js
const vacationDays = require('vacation-days');

console.log(vacationDays.isVacationDay('ZA', new Date('2018-03-20'))); // false
console.log(vacationDays.isVacationDay('ZA', new Date('2018-03-21'))); // true
```

# Supported Countries

The following countries are currently supported, but please feel free to add any missing countries to [this](https://github.com/Sloff/vacation-days) project

| Country      | Code | 2018 | 2019 |
| ------------ | ---- | :--: | :--: |
| South Africa | ZA   |  ✔   |  ✔   |
