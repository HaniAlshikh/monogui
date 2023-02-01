// source: api/domain/projections/user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_domain_projections_metadata_pb = require('../../../api/domain/projections/metadata_pb.js');
goog.object.extend(proto, api_domain_projections_metadata_pb);
var api_domain_common_messages_pb = require('../../../api/domain/common/messages_pb.js');
goog.object.extend(proto, api_domain_common_messages_pb);
goog.exportSymbol('proto.projections.User', null, global);
goog.exportSymbol('proto.projections.UserRoleBinding', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.projections.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.projections.User.repeatedFields_, null);
};
goog.inherits(proto.projections.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.projections.User.displayName = 'proto.projections.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.projections.UserRoleBinding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.projections.UserRoleBinding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.projections.UserRoleBinding.displayName = 'proto.projections.UserRoleBinding';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.projections.User.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.projections.User.prototype.toObject = function(opt_includeInstance) {
  return proto.projections.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.projections.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.projections.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.projections.UserRoleBinding.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && api_domain_projections_metadata_pb.LifecycleMetadata.toObject(includeInstance, f),
    source: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.projections.User}
 */
proto.projections.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.projections.User;
  return proto.projections.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.projections.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.projections.User}
 */
proto.projections.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = new proto.projections.UserRoleBinding;
      reader.readMessage(value,proto.projections.UserRoleBinding.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 5:
      var value = new api_domain_projections_metadata_pb.LifecycleMetadata;
      reader.readMessage(value,api_domain_projections_metadata_pb.LifecycleMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 6:
      var value = /** @type {!proto.common.UserSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.projections.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.projections.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.projections.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.projections.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.projections.UserRoleBinding.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_domain_projections_metadata_pb.LifecycleMetadata.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.projections.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.User} returns this
 */
proto.projections.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.projections.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.User} returns this
 */
proto.projections.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.projections.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.User} returns this
 */
proto.projections.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated UserRoleBinding roles = 4;
 * @return {!Array<!proto.projections.UserRoleBinding>}
 */
proto.projections.User.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.projections.UserRoleBinding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.projections.UserRoleBinding, 4));
};


/**
 * @param {!Array<!proto.projections.UserRoleBinding>} value
 * @return {!proto.projections.User} returns this
*/
proto.projections.User.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.projections.UserRoleBinding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.projections.UserRoleBinding}
 */
proto.projections.User.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.projections.UserRoleBinding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.projections.User} returns this
 */
proto.projections.User.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional LifecycleMetadata metadata = 5;
 * @return {?proto.projections.LifecycleMetadata}
 */
proto.projections.User.prototype.getMetadata = function() {
  return /** @type{?proto.projections.LifecycleMetadata} */ (
    jspb.Message.getWrapperField(this, api_domain_projections_metadata_pb.LifecycleMetadata, 5));
};


/**
 * @param {?proto.projections.LifecycleMetadata|undefined} value
 * @return {!proto.projections.User} returns this
*/
proto.projections.User.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.projections.User} returns this
 */
proto.projections.User.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.projections.User.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional common.UserSource source = 6;
 * @return {!proto.common.UserSource}
 */
proto.projections.User.prototype.getSource = function() {
  return /** @type {!proto.common.UserSource} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.common.UserSource} value
 * @return {!proto.projections.User} returns this
 */
proto.projections.User.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.projections.UserRoleBinding.prototype.toObject = function(opt_includeInstance) {
  return proto.projections.UserRoleBinding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.projections.UserRoleBinding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.projections.UserRoleBinding.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    role: jspb.Message.getFieldWithDefault(msg, 3, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 4, ""),
    resource: jspb.Message.getFieldWithDefault(msg, 5, ""),
    metadata: (f = msg.getMetadata()) && api_domain_projections_metadata_pb.LifecycleMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.projections.UserRoleBinding}
 */
proto.projections.UserRoleBinding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.projections.UserRoleBinding;
  return proto.projections.UserRoleBinding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.projections.UserRoleBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.projections.UserRoleBinding}
 */
proto.projections.UserRoleBinding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setResource(value);
      break;
    case 6:
      var value = new api_domain_projections_metadata_pb.LifecycleMetadata;
      reader.readMessage(value,api_domain_projections_metadata_pb.LifecycleMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.projections.UserRoleBinding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.projections.UserRoleBinding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.projections.UserRoleBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.projections.UserRoleBinding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResource();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_domain_projections_metadata_pb.LifecycleMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.projections.UserRoleBinding.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.UserRoleBinding} returns this
 */
proto.projections.UserRoleBinding.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.projections.UserRoleBinding.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.UserRoleBinding} returns this
 */
proto.projections.UserRoleBinding.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string role = 3;
 * @return {string}
 */
proto.projections.UserRoleBinding.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.UserRoleBinding} returns this
 */
proto.projections.UserRoleBinding.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scope = 4;
 * @return {string}
 */
proto.projections.UserRoleBinding.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.UserRoleBinding} returns this
 */
proto.projections.UserRoleBinding.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string resource = 5;
 * @return {string}
 */
proto.projections.UserRoleBinding.prototype.getResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.projections.UserRoleBinding} returns this
 */
proto.projections.UserRoleBinding.prototype.setResource = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional LifecycleMetadata metadata = 6;
 * @return {?proto.projections.LifecycleMetadata}
 */
proto.projections.UserRoleBinding.prototype.getMetadata = function() {
  return /** @type{?proto.projections.LifecycleMetadata} */ (
    jspb.Message.getWrapperField(this, api_domain_projections_metadata_pb.LifecycleMetadata, 6));
};


/**
 * @param {?proto.projections.LifecycleMetadata|undefined} value
 * @return {!proto.projections.UserRoleBinding} returns this
*/
proto.projections.UserRoleBinding.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.projections.UserRoleBinding} returns this
 */
proto.projections.UserRoleBinding.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.projections.UserRoleBinding.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.projections);