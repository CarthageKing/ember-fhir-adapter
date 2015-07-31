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


var ImagingStudy = DS.Model.extend({
    started: DS.attr('date'),
    patient: DS.belongsTo('reference', {embedded: true}),
    uid: DS.attr('string'),
    accession: DS.belongsTo('identifier', {embedded: true}),
    identifier: DS.hasMany('identifier', {embedded: true}),
    order: DS.hasMany('reference', {embedded: true}),
    modalityList: DS.attr('string'),
    referrer: DS.belongsTo('reference', {embedded: true}),
    availability: DS.attr('string'),
    url: DS.attr('string'),
    numberOfSeries: DS.attr('number'),
    numberOfInstances: DS.attr('number'),
    clinicalInformation: DS.attr('string'),
    procedure: DS.hasMany('coding', {embedded: true}),
    interpreter: DS.belongsTo('reference', {embedded: true}),
    description: DS.attr('string'),
    series:  DS.hasMany('imaging-study-series-component', {embedded: true})
});
export default ImagingStudy;
