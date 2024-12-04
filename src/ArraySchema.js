class ArraySchema {
    validator(value) {
        return Array.isArray(value);
    }
    
    constructor (validators = []) {
        this.validators = [this.validator, ...validators];
    }
    
    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }

    length(lgth) {
        const validator = (value) => {
            return value.length === lgth;
        }
        return new ArraySchema([...this.validators, validator])
    }
}

export default ArraySchema;