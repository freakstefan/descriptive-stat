/** @format */

// 1. Create a class that has class/static properties and methods. Show how to use/access them.

class StatProp {
  constructor(name, address, rating) {
    this.name = name;
    this.address = address;
    this.rating = rating;
  }

  static getName() {
    console.log("prosper");
    console.log(this.name);
  }

  getAddress() {
    console.log(this.address);
  }
}

const person = new StatProp("chukwudike", "Nnewi", 16);
// person.getAddress();

// StatProp.getName();
class MovieRental {
  movies = [...moviesList];

  rentMovie(movieName) {
    const title = this.movies.find((mov) => mov.Title === movieName);

    // if (!title) {
    //   console.log("Movie out of stock");
    //   return;
    // }

    if (title && !title.available) {
      console.log("Movie is not available at the moment");
    }
    if (title && title.available) {
      console.log(`${title?.Title} has ben rented by you`);
    } else {
      console.log("Movie out of stock");
    }
  }
}

const me = new MovieRental();

me.rentMovie("High school musial");

// 2. Using ES6+ classes, prepare code that computes descriptive statistics. Use the refreshment below to refresh your memory.

// i. The measures of central tendency: 3 of them

// ii. The measures of dispersion: 5 of them

class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency

  calculateMean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  calculateMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  }

  calculateMode() {
    const frequencyMap = new Map();
    for (const value of this.data) {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    }

    let mode;
    let maxFrequency = 0;

    for (const [value, frequency] of frequencyMap.entries()) {
      if (frequency > maxFrequency) {
        mode = value;
        maxFrequency = frequency;
      }
    }

    return mode;
  }

  // Measures of Dispersion

  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map((value) =>
      Math.pow(value - mean, 2)
    );
    return (
      squaredDifferences.reduce((acc, value) => acc + value, 0) /
      this.data.length
    );
  }

  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  calculateRange() {
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    return max - min;
  }

  calculateInterquartileRange() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const lowerQuartile = this.calculateMedian(
      sortedData.slice(0, Math.floor(sortedData.length / 2))
    );
    const upperQuartile = this.calculateMedian(
      sortedData.slice(Math.ceil(sortedData.length / 2))
    );

    return upperQuartile - lowerQuartile;
  }

  calculateCoefficientOfVariation() {
    const mean = this.calculateMean();
    const standardDeviation = this.calculateStandardDeviation();
    return (standardDeviation / mean) * 100;
  }
}

// Example usage
/*
const data = [5, 7, 8, 2, 1, 9, 4, 6, 3, 8];
const stats = new DescriptiveStatistics(data);

console.log("Mean:", stats.calculateMean());
console.log("Median:", stats.calculateMedian());
console.log("Mode:", stats.calculateMode());
console.log("Variance:", stats.calculateVariance());
console.log("Standard Deviation:", stats.calculateStandardDeviation());
console.log("Range:", stats.calculateRange());
console.log("Interquartile Range:", stats.calculateInterquartileRange());
console.log(
  "Coefficient of Variation:",
  stats.calculateCoefficientOfVariation()
);

*/
