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


var Contract = DS.Model.extend({
    identifier: DS.belongsTo('identifier', {embedded: true}),
    issued: DS.attr('date'),
    applies: DS.belongsTo('period', {embedded: true}),
    subject: DS.hasMany('reference', {embedded: true}),
    authority: DS.hasMany('reference', {embedded: true}),
    domain: DS.hasMany('reference', {embedded: true}),
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    subType: DS.hasMany('codeable-concept', {embedded: true}),
    action: DS.hasMany('codeable-concept', {embedded: true}),
    actionReason: DS.hasMany('codeable-concept', {embedded: true}),
    actor:  DS.hasMany('contract-actor-component', {embedded: true}),
    valuedItem:  DS.hasMany('contract-valued-item-component', {embedded: true}),
    signer:  DS.hasMany('contract-signatory-component', {embedded: true}),
    term:  DS.hasMany('contract-term-component', {embedded: true}),
    bindingAttachment: DS.belongsTo('attachment', {embedded: true}),
    bindingReference: DS.belongsTo('reference', {embedded: true}),
    friendly:  DS.hasMany('contract-friendly-language-component', {embedded: true}),
    legal:  DS.hasMany('contract-legal-language-component', {embedded: true}),
    rule:  DS.hasMany('contract-computable-language-component', {embedded: true})
});
export default Contract;
