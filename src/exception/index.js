function Exception(name, message) {
  this.name = name;
  this.message = message;
}

Exception.prototype.toString = () => {
  return this.name + ': "' + this.message + '"';
};

export default Exception;