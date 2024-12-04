class NumberSchema {
    validator(value) {
        return typeof value === 'number' && !Number.isNaN(value);
    }
    
    constructor (validators = []) {
        this.validators = [this.validator, ...validators];
    }

    odd() {
        const validator = (value) => {
            return value % 2 === 1;
        }
        return new NumberSchema([...this.validators, validator])
    }

    even() {
        const validator = (value) => {
            return value % 2 === 0;
        }
        return new NumberSchema([...this.validators, validator])
    }
    
    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }
}

export default NumberSchema;