import React from "react";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import {
	Box,
	Text,
	FormControl,
	Heading,
	HStack,
	Input,
	Link,
	VStack,
	Button,
	WarningOutlineIcon,
	Flex,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import { loginSchema } from "../utils";
import { AuthContext } from "../contexts";

export const LoginScreen = (props: any) => {
	const navigation = useNavigation();

	const handleSignUpRedirection = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	const handleBack = () => {
		navigation.goBack();
	};

	return (
		<Box bg='#1a202c' h='100%'>
			<Box safeArea flex={1} p='2' py='8' w='90%' mx='auto'>
				<Flex h='200px' flexDirection={"row"}>
					<Button h='18%' variant='ghost' colorScheme='teal' onPress={handleBack} marginRight={4}>
						<AntDesign name='back' size={28} color='white' />
					</Button>
					<Heading size='lg' color='teal.400' fontWeight='bold'>
						Sign in
					</Heading>
				</Flex>
				<Box h='100%' flex={1}>
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={loginSchema}
						onSubmit={(values) =>
							auth
								.signInWithEmailAndPassword(values.email, values.password)
								.then((userCredential) => {
									const user = userCredential.user;
								})
								.catch((error) => {
									const errorCode = error.code;
									const errorMessage = error.message;
								})
						}>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							isSubmitting,
						}: {
							handleChange: any;
							handleBlur: any;
							handleSubmit: any;
							values: any;
							errors: any;
							isSubmitting: any;
						}) => (
							<VStack space={3} mt='5'>
								<FormControl isRequired isInvalid={!!errors.email}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										Email
									</FormControl.Label>
									<Input
										placeholder={"Email"}
										size='lg'
										onChangeText={handleChange("email")}
										onBlur={handleBlur("email")}
										value={values.email}
									/>
									<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
										{errors.email}
									</FormControl.ErrorMessage>
								</FormControl>
								<FormControl isRequired isInvalid={!!errors.password}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										Password
									</FormControl.Label>
									<Input
										type='password'
										placeholder={"Password"}
										size='lg'
										onChangeText={handleChange("password")}
										onBlur={handleBlur("password")}
										value={values.password}
									/>
									<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
										{errors.password}
									</FormControl.ErrorMessage>
									<Link
										_text={{ fontSize: "sm", fontWeight: "semibold", color: "teal.400" }}
										alignSelf='flex-end'
										mt='1'>
										Forget Password?
									</Link>
								</FormControl>
								<Button
									mt='4'
									isLoading={isSubmitting}
									isLoadingText='Submitting'
									onPress={handleSubmit}
									fontWeight='bold'
									style={{ borderRadius: 30, padding: 12 }}
									fontSize={34}
									colorScheme='teal'
									_text={{ color: "white" }}>
									Sign in
								</Button>
								<HStack mt='6' justifyContent='center'>
									<Text fontSize='md' color='white' fontWeight={400}>
										I'm a new user.{" "}
									</Text>
									<Link
										_text={{
											color: "teal.400",
											fontWeight: "medium",
											fontSize: "sm",
										}}
										onPress={handleSignUpRedirection}
										href='#'>
										Sign Up
									</Link>
								</HStack>
							</VStack>
						)}
					</Formik>
				</Box>
			</Box>
		</Box>
	);
};
