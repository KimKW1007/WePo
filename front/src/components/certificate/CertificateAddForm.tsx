import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addCertificate } from "../../api/api";
import { ICertificate } from "../../atoms";
import { DangerIcon, ErrMsg } from "../user/LoginForm";
import {
    MvpContainer,
    MvpTitle,
    MvpTitleBox,
    MvpContentContainer,
    MvpContentBox,
    MvpContentName,
    MvpContentDetail,
    MvpContentDate,
    MvpEditButton,
    MvpAddButton,
    MvpAddInput,
    MvpAddInputBox,
    RequiredLabel,
    Button,
} from "../MyPortfolio";

export function CertificateAddForm({ setAddFormActive, setCertificates, id }: any) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ICertificate>({ mode: "onChange" });

    const onvalid = (data: ICertificate) => {
        setCertificates((project: any) => [...project, data]);
        setAddFormActive(false);

        addCertificate(data);
    };

    useEffect(() => {
        setError("title", {
            type: "custom",
            message: "자격증 명을 입력해주세요",
        });
        setError("date", {
            type: "custom",
            message: "발급일을 입력해주세요",
        });
        setError("org", {
            type: "custom",
            message: "발급기관을 입력해주세요",
        });
    }, []);

    return (
        <form onSubmit={handleSubmit(onvalid)}>
            <MvpAddInputBox>
                <p style={{ position: "absolute", right: "20px", top: "20px" }}>
                    <RequiredLabel>*</RequiredLabel> 필수사항
                </p>
                <MvpContentName>
                    자격증 <RequiredLabel>*</RequiredLabel>
                </MvpContentName>
                <MvpAddInput
                    type="text"
                    id="certificate"
                    width="300"
                    placeholder="자격증이름"
                    {...register("title", {
                        required: "자격증을 입력해주세요",
                        shouldUnregister: true,
                    })}
                ></MvpAddInput>
                {errors.title && (
                    <ErrMsg>
                        <DangerIcon />
                        {errors.title.message}
                    </ErrMsg>
                )}
            </MvpAddInputBox>
            <MvpAddInputBox>
                <MvpContentName>
                    발급일 <RequiredLabel>*</RequiredLabel>
                </MvpContentName>
                <MvpAddInput
                    type="Date"
                    width="130"
                    id="issue-date"
                    placeholder="발급일"
                    {...register("date", {
                        required: "발급일을 입력해주세요",
                        shouldUnregister: true,
                    })}
                ></MvpAddInput>
                {errors.date && (
                    <ErrMsg>
                        <DangerIcon />
                        {errors.date.message}
                    </ErrMsg>
                )}
            </MvpAddInputBox>
            <MvpAddInputBox>
                <MvpContentName>
                    발급기관 <RequiredLabel>*</RequiredLabel>
                </MvpContentName>
                <MvpAddInput
                    type="string"
                    id="issuer"
                    width="300"
                    placeholder="발급기관"
                    {...register("org", {
                        required: "발급기관을 입력해주세요",
                        shouldUnregister: true,
                    })}
                ></MvpAddInput>
                {errors.org && (
                    <ErrMsg>
                        <DangerIcon />
                        {errors.org.message}
                    </ErrMsg>
                )}
            </MvpAddInputBox>
            <MvpAddInputBox>
                <MvpContentName>자격증 설명</MvpContentName>
                <MvpAddInput
                    type="text"
                    id="certificate-description"
                    placeholder="예) 전산 직무에 관심이 많아 산업인력공단에서 시행하는 정보처리기사 자격증을 취득하였습니다."
                    {...register("description", { shouldUnregister: true })}
                ></MvpAddInput>
            </MvpAddInputBox>

            <div style={{ float: "right" }}>
                <Button color="#3687FF" type="submit">
                    추가
                </Button>
                <Button onClick={() => setAddFormActive(false)}>취소</Button>
            </div>
        </form>
    );
}
