/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * http methods
 */
export enum HttpMethod {
    GET = 'get',
    POST = 'post',
}

/**
 * Constant used for PKCE
 */
export const RANDOM_OCTET_SIZE = 32;

/**
 * Constants used in PKCE
 */
export const Hash = {
    SHA256: 'sha256',
};

/**
 * Constants for encoding schemes
 */
export const CharSet = {
    CV_CHARSET:
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
};

/**
 * Cache Constants
 */
export const CACHE = {
    FILE_CACHE: '',
    EXTENSION_LIB: 'extenstion_library',
};

/**
 * Constants for headers
 */
export const Header = {
    MSAL_SKU_KEY: 'x-client-SKU',
    MSAL_SKU_VALUE: 'MSAL.node',
    MSAL_VERSION: 'x-client-VER',
    CPU: 'x-client-CPU',
    OS: 'x-client-OS',
    // TODO will also add appName and appVersion here
};
