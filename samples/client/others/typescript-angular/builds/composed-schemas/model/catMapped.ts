/**
 * Schemas with different types of composition for testing models generation
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PetWithMappedDiscriminatorModel } from './petWithMappedDiscriminator';


export interface CatMappedModel extends PetWithMappedDiscriminatorModel { 
    hunts?: boolean;
}

