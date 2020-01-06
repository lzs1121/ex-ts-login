export interface UserProfileState {
  name: string;
}

const defaultUserState: () => UserProfileState = () => ({
  name: 'Sean'
});

export const sessionReducer = (state = defaultUserState(), action: any) => {
  return state;
};
