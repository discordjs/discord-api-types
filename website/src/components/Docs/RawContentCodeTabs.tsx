import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React, { FC } from 'react';

interface CodeblockProps {
	readonly content: string;
	readonly title?: string;
}

interface Props {
	readonly jsCodeblockProps: CodeblockProps;
	readonly esmCodeblockProps: CodeblockProps;
	readonly tsCodeblockProps: CodeblockProps;
}

const RawContentCodeTabs: FC<Props> = ({ esmCodeblockProps, jsCodeblockProps, tsCodeblockProps }) => (
	<Tabs groupId="language-choice">
		<TabItem value="javascript" label="JavaScript" default>
			<CodeBlock className="javascript">{jsCodeblockProps.content}</CodeBlock>
		</TabItem>
		<TabItem value="ESM" label="ESM">
			<CodeBlock className="javascript">{esmCodeblockProps.content}</CodeBlock>
		</TabItem>
		<TabItem value="typescript" label="TypeScript">
			<CodeBlock className="typescript">{tsCodeblockProps.content}</CodeBlock>
		</TabItem>
	</Tabs>
);

export default RawContentCodeTabs;
