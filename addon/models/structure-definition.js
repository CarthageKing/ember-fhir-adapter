// Copyright (c) 2011-2015, HL7, Inc & The MITRE Corporation
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice, this
//       list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright notice,
//       this list of conditions and the following disclaimer in the documentation
//       and/or other materials provided with the distribution.
//     * Neither the name of HL7 nor the names of its contributors may be used to
//       endorse or promote products derived from this software without specific
//       prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


import DS from 'ember-data';


var StructureDefinition = DS.Model.extend({
    url: DS.attr('string'),
    identifier: DS.hasMany('identifier', {embedded: true}),
    version: DS.attr('string'),
    name: DS.attr('string'),
    display: DS.attr('string'),
    status: DS.attr('string'),
    experimental: DS.attr('boolean'),
    publisher: DS.attr('string'),
    contact:  DS.hasMany('structure-definition-contact-component', {embedded: true}),
    date: DS.attr('date'),
    description: DS.attr('string'),
    useContext: DS.hasMany('codeable-concept', {embedded: true}),
    requirements: DS.attr('string'),
    copyright: DS.attr('string'),
    code: DS.hasMany('coding', {embedded: true}),
    fhirVersion: DS.attr('string'),
    mapping:  DS.hasMany('structure-definition-mapping-component', {embedded: true}),
    kind: DS.attr('string'),
    constrainedType: DS.attr('string'),
    abstract: DS.attr('boolean'),
    contextType: DS.attr('string'),
    context: DS.attr('string'),
    base: DS.attr('string'),
    snapshot:  DS.belongsTo('structure-definition-snapshot-component', {embedded: true}),
    differential:  DS.belongsTo('structure-definition-differential-component', {embedded: true})
});
export default StructureDefinition;
