package com.sambhav.meshPay.crypto.aes;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class AESUtil {

    private AESUtil() {}

    /**
     * Generate 256-bit AES Key
     */
    public static SecretKey generateKey() {

        try {

            KeyGenerator generator =
                    KeyGenerator.getInstance("AES");

            generator.init(256);

            return generator.generateKey();

        } catch (Exception e) {

            throw new RuntimeException(e);

        }

    }

    /**
     * Encrypt Text
     */
    public static String encrypt(String plainText,
                                 SecretKey key) {

        try {

            Cipher cipher =
                    Cipher.getInstance("AES");

            cipher.init(Cipher.ENCRYPT_MODE, key);

            byte[] encrypted =
                    cipher.doFinal(plainText.getBytes());

            return Base64.getEncoder()
                    .encodeToString(encrypted);

        } catch (Exception e) {

            throw new RuntimeException(e);

        }

    }

    /**
     * Decrypt Text
     */
    public static String decrypt(String cipherText,
                                 SecretKey key) {

        try {

            Cipher cipher =
                    Cipher.getInstance("AES");

            cipher.init(Cipher.DECRYPT_MODE, key);

            byte[] decoded =
                    Base64.getDecoder()
                            .decode(cipherText);

            return new String(cipher.doFinal(decoded));

        } catch (Exception e) {

            throw new RuntimeException(e);

        }

    }

    /**
     * Convert SecretKey to String
     */
    public static String encodeKey(SecretKey key) {

        return Base64.getEncoder()
                .encodeToString(key.getEncoded());

    }

    /**
     * Convert String back to SecretKey
     */
    public static SecretKey decodeKey(String key) {

        byte[] decoded =
                Base64.getDecoder().decode(key);

        return new SecretKeySpec(decoded,
                0,
                decoded.length,
                "AES");

    }

}