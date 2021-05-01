const Project  = artifacts.require('Project');

module.exports = function(delployer){
    delployer.deploy(Project);
}